import { Box, Text, Button } from "@skynexui/components";

export default function Header() {
  return (
    <Box
      styleSheet={{
        width: "100%",
        marginBottom: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text variant="heading2">Chat</Text>
      <Button
        variant="tertiary"
        colorVariant="neutral"
        buttonColors={{
          mainColor: "#9C8944",
          mainColorStrong: "#807038",
          mainColorLight: "#B4A055",
          contrastColor: "#9C1C22",
        }}
        iconName="FaSignOutAlt"
        label="Logout"
        href="/"
      />
    </Box>
  );
}
