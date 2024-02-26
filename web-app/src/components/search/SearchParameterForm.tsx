import React, { FC } from 'react';
import {Form, Input, Button, ConfigProvider, Select} from 'antd';

interface SearchParameterFormProps {
  onFinish: (values: any) => void;
}

export const SearchParameterForm: FC<SearchParameterFormProps> = ({ onFinish }) => {
    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    const [form] = Form.useForm();

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#00b96b",
                },
                components: {
                    DatePicker: {
                        presetsWidth: 300,
                    },
                },
            }}
        >
            <Form
                name="search"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                form={form}
            >
                <Form.Item
                    label="Search for:"
                    name="query"
                    rules={[{required: true, message: 'No search text entered!'}]}
                >
                    <Input placeholder="Pineapples..."/>
                </Form.Item>
                <Form.Item
                    label="Search Type"
                    name="searchType"
                    rules={[{required: true, message: 'Please select an option!'}]}
                    initialValue="all"
                >
                    <Select placeholder="Select a option">
                        <Select.Option value="all">All</Select.Option>
                        <Select.Option value="events">Events</Select.Option>
                        <Select.Option value="fams">Fams</Select.Option>
                        <Select.Option value="chats">Chats</Select.Option>
                    </Select>
                </Form.Item>
                {/* Add more Form.Item fields as needed */}
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </ConfigProvider>
    )
};