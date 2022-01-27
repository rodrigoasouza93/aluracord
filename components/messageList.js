import { Box, Text, Image, Icon } from "@skynexui/components";

import { appConfig } from "../config/config";

export default function MessageList({ messages, handleRemoveMessage }) {
  return (
    <Box
      tag="ul"
      className="messages-list"
      styleSheet={{
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column-reverse",
        flex: 1,
        color: appConfig.theme.colors.neutrals["000"],
        marginBottom: "16px",
      }}
    >
      {messages.map((message) => (
        <Text
          key={message.id}
          tag="li"
          styleSheet={{
            borderRadius: "5px",
            padding: "6px",
            marginBottom: "12px",
            hover: {
              backgroundColor: appConfig.theme.colors.neutrals[700],
            },
          }}
        >
          <Box
            styleSheet={{
              marginBottom: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Image
                styleSheet={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginRight: "8px",
                }}
                src={`https://github.com/rodrigoasouza93.png`}
              />
              <Text tag="strong">{message.from}</Text>
              <Text
                styleSheet={{
                  fontSize: "10px",
                  marginLeft: "8px",
                  color: appConfig.theme.colors.neutrals[300],
                }}
                tag="span"
              >
                {new Date().toLocaleDateString("pt-BR")}
              </Text>
            </Box>
            <Box>
              <button
                style={{
                    backgroundColor: "#9C8944",
                    width: "20px",
                    height: "20px",
                    border: 0,
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#9C1C22"
                }}
                onClick={() => handleRemoveMessage(message.id)}
              >
                <Icon label="Icon Component" name="FaTimes" />
              </button>
            </Box>
          </Box>
          {message.text}
        </Text>
      ))}
    </Box>
  );
}
