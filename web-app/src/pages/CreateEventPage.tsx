import { Button, ConfigProvider, DatePicker, Form, Input, Space, TimePicker, Upload } from "antd";
import { EnvironmentOutlined, PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import "../styles/events.css";

export const CreateEventPage = () => {
	const onFinish = (values: any) => {
		console.log("Success:", values);
	};
	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};
	const normFile = (e: any) => {
		if (Array.isArray(e)) {
			return e;
		}
		return e?.fileList;
	};
	const [form] = Form.useForm();

	const onReset = () => {
		form.resetFields();
	};

	return (
		<>
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
					name="basic"
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					style={{ maxWidth: 600 }}
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
					form={form}
				>
					<h1>Create Event Page</h1>
					<h3>Event NAme</h3>
					<h3>start date </h3>
					<h3>end date </h3>
					<h3>location </h3>
					<h3>details </h3>
					<h3>invites </h3>
					<h3>Cover image</h3>
					<Form.Item label="Event Name" name="name">
						<Input showCount maxLength={100} />
					</Form.Item>
					<Form.Item label="Start Date">
						<Space.Compact style={{ width: "100%" }} block>
							<Form.Item
								className="nested-date-input-form-item"
								name={["start", "date"]}
							>
								<DatePicker />
							</Form.Item>
							<Form.Item
								className="nested-date-input-form-item"
								name={["start", "time"]}
							>
								<TimePicker />
							</Form.Item>
						</Space.Compact>
					</Form.Item>

					<Form.Item label="End Date">
						<Space.Compact>
							<Form.Item
								className="nested-date-input-form-item"
								name={["end", "date"]}
							>
								<DatePicker />
							</Form.Item>
							<Form.Item
								className="nested-date-input-form-item"
								name={["end", "time"]}
							>
								<TimePicker />
							</Form.Item>
						</Space.Compact>
					</Form.Item>

					<Form.Item label="Location" name="location">
						<Input addonAfter={<EnvironmentOutlined />} />
					</Form.Item>
					<Form.Item label="Details" name="details">
						<TextArea showCount placeholder="Event Details" autoSize />
					</Form.Item>
					<Form.Item label="Guestlist" name="guestlist">
						<Input showCount maxLength={100} />
					</Form.Item>
					<Form.Item
						label="Cover Image"
						valuePropName="fileList"
						getValueFromEvent={normFile}
					>
						<Upload action="/upload-API-HERE" listType="picture-card">
							<button style={{ border: 0, background: "none" }} type="button">
								<PlusOutlined />
								<div style={{ marginTop: 8 }}>Upload</div>
							</button>
						</Upload>
					</Form.Item>
					<Space>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
						<Button htmlType="reset" onClick={onReset}>
							reset
						</Button>
					</Space>
				</Form>
			</ConfigProvider>
		</>
	);
};
