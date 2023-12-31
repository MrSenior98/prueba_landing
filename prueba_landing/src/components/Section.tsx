import { Box, Typography } from '@mui/material';

interface SectionProps {
  title: string;
  content: React.ReactNode;
  bgColor? : string
}

function Section({ title, content, bgColor }: SectionProps) {
  return (
    <Box p={5} minHeight="80vh" bgcolor={bgColor}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Box>{content}</Box>
    </Box>
  );
}

export default Section;
