import { Form, Input, Button } from "antd";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { useSnackbar } from "notistack";

export default function Login() {
    document.title = "Login | Code Rooms"

    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { enqueueSnackbar } = useSnackbar();

    const onFinish = async values => {
        setLoading(true);
        await axios
            .post("/auth/login", {
                username: values.userName,
                password: values.password,
            })
            .then(res => {
                // console.log(res);
                localStorage.setItem("JWTtoken", res.data.access_token);
                try {
                    window.location.href = history.location.state.from;
                } catch (error) {
                    window.location.href = "/";
                }
            })
            .catch(err => {
                try {
                    enqueueSnackbar(err.response.data.detail, {
                        variant: "error",
                    });
                } catch (error) {
                    enqueueSnackbar("Some Error occurred.", {
                        variant: "error",
                    });
                }
            });
        setLoading(false);
    };

    const onFinishFailed = errorInfo => {
        // console.log(errorInfo);
        try {
            enqueueSnackbar(errorInfo.errorFields[0].errors[0], {
                variant: "error",
            });
        } catch (error) {
            enqueueSnackbar("Some Error occurred.", {
                variant: "error",
            });
        }
    };

    return (
        <div className="login-outer-div">
            <img
                src="./Logo.PNG"
                style={{ alignSelf: "center", width: '250px', boxShadow: "20px 20px 2px rgba(0, 0, 0, 0.3)" }}
            />
            <div className="login-header-div">Login</div>

            <Form
                name="basic"
                labelCol={{
                    span: 24,
                }}
                wrapperCol={{
                    span: 24,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="login-form"
            >
                <Form.Item
                    label={<label style={{ color: "var(--primaryText)" }}>Username / Email</label>}
                    name="userName"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username/email !",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={<label style={{ color: "var(--primaryText)" }}>Password</label>}
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <div>
                    <a href="/change_password"> Forgot password. </a>
                </div>
                <a href="/signup"> Dont have an account ? Create one. </a>
                
                <Form.Item>
                    <Button
                        htmlType="submit"
                        loading={loading}
                        style={{
                            backgroundColor: "var(--success)",
                            // width: "100px",
                            fontSize: "20px",
                            height: "auto",
                            marginTop: "10px",
                        }}
                    >
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
