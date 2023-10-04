import {  Container, Typography } from '@mui/material';
import { useAppContext } from '../contexts/AppContext';
import Header from '@/components/Header';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import Requirements from '@/components/List';
import Form from '@/components/Form';

function Index() {
    return (
      <>
      <Header />
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Demostracion Landing Page Basica
        </Typography>
        <Section title="Requerimientos" content={<Requirements/>} bgColor="primary.main"/>
        <Section title="Formulario" content={<Form/>} bgColor="secondary.main" />
      </Container>
      <Footer />
    </>
    );
}

export default Index;
