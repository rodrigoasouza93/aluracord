import { Box, Button, TextField } from "@skynexui/components";
import React, { useState } from "react";

import Header from "../components/header";
import MessageList from "../components/messageList";
import { appConfig } from "../config/config";


export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  function handleNewMessage(newMessage) {
    if (message) {
      const message = {
        text: newMessage,
        from: "rodrigoasouza93",
        id: messageList.length,
      };
      setMessageList([message, ...messageList]);
      setMessage("");
    }
  }

  function handleRemoveMessage(id) {
    const filteredList = messageList.filter((message) => message.id !== id);
    setMessageList(filteredList);
  }

  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: `url(${appConfig.backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
          }}
        >
          <MessageList messages={messageList} handleRemoveMessage={handleRemoveMessage} />

          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              styleSheet={{
                display: "flex",
                alignItems: "flex-start",
                flex: 1,
              }}
            >
              <TextField
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    handleNewMessage(message);
                  }
                }}
                placeholder="Insira sua mensagem aqui..."
                type="textarea"
                styleSheet={{
                  width: "100%",
                  border: "0",
                  resize: "none",
                  borderRadius: "5px",
                  padding: "6px 8px",
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                  marginRight: "12px",
                  color: appConfig.theme.colors.neutrals[200],
                  flex: 1,
                }}
              />
              <Button
                iconName="arrowRight"
                buttonColors={{
                  mainColor: "#9C8944",
                  mainColorStrong: "#807038",
                  mainColorLight: "#B4A055",
                  contrastColor: "#9C1C22",
                }}
                onClick={() => handleNewMessage(message)}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

