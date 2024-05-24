import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Form, Input, Radio, List, Flex } from 'antd';
import { useState, useEffect } from 'react';
import "./contact.css";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { addContact, updateContact, deleteContact, setContacts } from './store/contactSlice';

type CreateContact = {
    firstname: string;
    lastname: string;
    isactive: boolean;
};

function Contact() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [form] = Form.useForm();
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const dispatch = useDispatch();
    const formDataList = useSelector((state: RootState) => state.contact.contacts);

    useEffect(() => {
        const storedData = localStorage.getItem('formDataList');
        if (storedData) {
            dispatch(setContacts(JSON.parse(storedData)));
        }
    }, [dispatch]);

    const saveFormDataList = (formDataList: CreateContact[]) => {
        localStorage.setItem('formDataList', JSON.stringify(formDataList));
    };

    const onFinish = (values: CreateContact) => {
        if (editingIndex !== null) {
            dispatch(updateContact({ index: editingIndex, contact: values }));
        } else {
            dispatch(addContact(values));
        }
        saveFormDataList(formDataList);
        closeModal();
    };

    const handleEdit = (index: number) => {
        setEditingIndex(index);
        form.setFieldsValue(formDataList[index]);
        setModalOpen(true);
    };

    const handleDelete = (index: number) => {
        dispatch(deleteContact(index));
        saveFormDataList(formDataList);
    };

    const openModal = () => {
        setEditingIndex(null);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        form.resetFields();
    };
    // Group contacts in pairs for display
    const groupedFormDataList = [];
    for (let i = 0; i < formDataList.length; i += 2) {
        groupedFormDataList.push(formDataList.slice(i, i + 2));
    }

    return (
        <div className='contact-container'>
            <Button type='primary' onClick={openModal} size='large' className='create-button'>Create Contact</Button>
            <List
                className='contact-list'
                dataSource={groupedFormDataList}
                renderItem={(group, index) => (
                    <List.Item key={index} className='list-item'>
                        {group.map((item, subIndex) => (
                            <div key={subIndex} className='list-content'>
                                <p className='list-text'>First Name: {item.firstname}</p>
                                <p className='list-text'>Last Name: {item.lastname}</p>
                                <p className='list-text'>Status: {item.isactive ? 'Active' : 'Inactive'}</p>
                                <div className='list-actions'>
                                    <Flex gap={20}>
                                        <Button size='large' onClick={() => handleEdit(index * 2 + subIndex)} icon={<EditOutlined/>} ></Button>
                                        <Button size='large' onClick={() => handleDelete(index * 2 + subIndex)} icon={<DeleteOutlined />}></Button>
                                    </Flex>
                                    
                                </div>
                            </div>
                        ))}
                    </List.Item>
                )}
            />
            <Modal
                className='modal-title'
                open={modalOpen}
                title={editingIndex !== null ? "Edit Contact" : "Create Contact"}
                onCancel={closeModal}
                footer={null}
            >
                <Form
                    form={form}
                    name='basic'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 12 }}
                    onFinish={onFinish}
                >
                    <Space direction='vertical' className='modal-space'>
                        <Form.Item
                            label="First Name"
                            name="firstname"
                            rules={[{ required: true, message: 'Please input your First Name!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Last Name"
                            name="lastname"
                            rules={[{ required: true, message: 'Please input your Last Name!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Status"
                            name="isactive"
                            rules={[{ required: true, message: 'Please select your status!' }]}
                        >
                            <Radio.Group>
                                <Space direction='vertical' className='modal-radio'>
                                    <Radio value={true}>Active</Radio>
                                    <Radio value={false}>Inactive</Radio>
                                </Space>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item wrapperCol={{ span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Save
                            </Button>
                        </Form.Item>
                    </Space>
                </Form>
            </Modal>
        </div>
    );
}

export default Contact;

