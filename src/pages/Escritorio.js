import React, { useState } from "react";
import { Row, Col, Typography, Button, Divider } from "antd";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";
import { getUserStorage } from "../helpers/getUserStorage";

const { Title, Text } = Typography;

export const Escritorio = () => {
  const [user] = useState(getUserStorage());
  const history = useNavigate();

  const salir = () => {
    localStorage.clear();
    history("/ingresar");
  };
  const siguienteTicket = () => {
    console.log("siguienteTicket");
  };

  if (!user.asesor || !user.escritorio) {
    return <Navigate to="/ingresar" />;
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{user.asesor}</Title>
          <Text>Usted está trabajando en el escritorio: </Text>
          <Text type="success"> {user.escritorio} </Text>
        </Col>

        <Col span={4} align="right">
          <Button shape="round" danger type="primary" onClick={salir}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Col>
          <Text>Está atendiendo el ticket número: </Text>
          <Text style={{ fontSize: 30 }} type="danger">
            55
          </Text>
        </Col>
      </Row>

      <Row>
        <Col offset={18} span={6} align="right">
          <Button onClick={siguienteTicket} shape="round" type="primary">
            <RightOutlined />
            Siguiente
          </Button>
        </Col>
      </Row>
    </>
  );
};
