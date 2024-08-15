import { Box, TypographyStylesProvider } from "@mantine/core";

export default function Home() {
  return (
    <main>
      <Box p="xl">
        <TypographyStylesProvider>
          <h1>Mantine Dashboard</h1>
          <p>Free React Dashboard made with Mantine components and Next.js.</p>
        </TypographyStylesProvider>
      </Box>
    </main>
  );
}
