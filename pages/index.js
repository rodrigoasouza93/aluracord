import { Box, Button, Image, Text, TextField } from "@skynexui/components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Titulo from "../components/title";
import { appConfig } from "../config/config";


export default function PaginaInicial() {
  const [username, setUsername] = useState("");
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(async () => {
    if (username.length > 0) {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.status === 404) {
        setUser(null);
      } else {
        const data = await response.json();
        setUser(data);
      }
    } else {
      setUser(null);
    }
  }, [username]);

  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.primary["000"],
        backgroundImage: `url(${appConfig.backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          width: "100%",
          maxWidth: "700px",
          borderRadius: "5px",
          padding: "32px",
          margin: "16px",
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          backgroundColor: appConfig.theme.colors.neutrals[700],
        }}
      >
        {/* Formulário */}
        <Box
          as="form"
          styleSheet={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "100%", sm: "50%" },
            textAlign: "center",
            marginBottom: "32px",
          }}
          onSubmit={(event) => {
            event.preventDefault();
            router.push("/chat");
          }}
        >
          <Titulo tag="h2">
            Seu lar ficou para trás agora. O mundo está à sua frente.
          </Titulo>
          <Text
            variant="body3"
            styleSheet={{
              marginBottom: "32px",
              color: appConfig.theme.colors.neutrals[300],
            }}
          >
            {appConfig.name}
          </Text>

          <TextField
            fullWidth
            textFieldColors={{
              neutral: {
                textColor: appConfig.theme.colors.neutrals[200],
                mainColor: appConfig.theme.colors.neutrals[900],
                mainColorHighlight: appConfig.theme.colors.primary[500],
                backgroundColor: appConfig.theme.colors.neutrals[800],
              },
            }}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Digite o seu usuário do Github"
          />
          <Button
            type="submit"
            label="Entrar"
            fullWidth
            buttonColors={{
              contrastColor: appConfig.theme.colors.neutrals["500"],
              mainColor: appConfig.theme.colors.primary[500],
              mainColorLight: appConfig.theme.colors.primary[400],
              mainColorStrong: appConfig.theme.colors.primary[600],
            }}
          />
        </Box>
        {/* Formulário */}

        {/* Photo Area */}
        {user && (
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: "1px solid",
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              src={user.avatar_url}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >
              {user.name}
            </Text>
          </Box>
        )}
        {/* Photo Area */}
      </Box>
    </Box>
  );
}
