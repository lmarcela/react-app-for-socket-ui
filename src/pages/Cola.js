import { Card, Col, Divider, List, Row, Tag, Typography } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/SocketContext";
import { getLastOnes } from "../helpers/getLastOnes";
import { useHideMenu } from "../hooks/useHideMenu";

const { Title, Text } = Typography;

// const data = [
//   {
//     ticketNo: 33,
//     escritorio: 3,
//     agente: "Marcela Malaver",
//   },
//   {
//     ticketNo: 34,
//     escritorio: 4,
//     agente: "Yessica Gómez",
//   },
//   {
//     ticketNo: 35,
//     escritorio: 5,
//     agente: "Jeisson Malaver",
//   },
//   {
//     ticketNo: 36,
//     escritorio: 3,
//     agente: "Marcela Malaver",
//   },
//   {
//     ticketNo: 37,
//     escritorio: 3,
//     agente: "Marcela Malaver",
//   },
//   {
//     ticketNo: 38,
//     escritorio: 2,
//     agente: "Yessica Gómez",
//   },
//   {
//     ticketNo: 39,
//     escritorio: 5,
//     agente: "Jeisson Malaver",
//   },
// ];

export const Cola = () => {
  useHideMenu(true);
  const { socket } = useContext(SocketContext);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    socket.on("assigned-ticket", (tickets) => {
      setTickets(tickets);
    });
    return () => socket.off("assigned-ticket");
  }, [socket]);

  useEffect(() => {
    // getLastOnes().then((tickets) => setTickets(tickets)); // hace lo mismo
    getLastOnes().then(setTickets);
  }, []);

  return (
    <>
      <Title level={1}>Atendiendo al cliente</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 3)}
            renderItem={(ticket) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano"> {ticket.asesor} </Tag>,
                    <Tag color="magenta">Escritorio: {ticket.escritorio}</Tag>,
                  ]}
                >
                  <Title> No. {ticket.number}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>

        <Col span={12}>
          <Divider> Historial </Divider>
          <List
            dataSource={tickets.slice(3)}
            renderItem={(ticket) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${ticket.number}`}
                  description={
                    <>
                      <Text type="secondary">En el escritorio: </Text>
                      <Tag color="magenta"> {ticket.escritorio} </Tag>
                      <Text type="secondary"> Agente: </Text>
                      <Tag color="volcano"> {ticket.asesor} </Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
