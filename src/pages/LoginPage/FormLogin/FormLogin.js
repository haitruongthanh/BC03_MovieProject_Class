import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { userService } from "../../../services/userService";
import { localStorageService } from "../../../services/localStorageService";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setUserInforAction,
  setUserInforActionService,
} from "../../../redux/actions/userAction";

export default function FormLogin() {
  // can thiệp thanh URL, dùng để điều hướng trang
  let history = useHistory();

  let dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);
    let onSuccess = () => {
      message.success("Thành công");
      setTimeout(() => {
        history.push("/");
      }, 2000);
    };

    let onFail = () => {
      message.error("Sai roi");
    };
    dispatch(setUserInforActionService(values, onSuccess, onFail));
    // userService
    //   .postDangNhap(values)
    //   .then((res) => {
    //     localStorageService.setUserInfor(res.data.content);
    //     dispatch(setUserInforAction(res.data.content));
    //     message.success("Đăng nhập thành công");
    //     setTimeout(() => {
    //       history.push("/");
    //     }, 2000);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     message.error(err.response.data.message);
    //   });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <div className="text-center">
        <Button className="bg-blue-500 text-white mx-auto" htmlType="submit">
          Đăng nhập
        </Button>
      </div>
    </Form>
  );
}
