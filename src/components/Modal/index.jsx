import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  color: '',
  bgcolor: 'gray',
  border: '2px solid #000',
  borderRadius: '15px',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>Por si no lo sabías...</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Sos El Amor De Mi Vida</h2>
          <p id="child-modal-description">Gracias Por Estar Siempre Para Mi</p>
          <Button onClick={handleClose}>Feliz Día De San Valentín</Button>
        </Box>
      </Modal>
    </>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="secondary" onClick={handleOpen}>
        Sabías Que...
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">
            Soy El Mas Afortunado De Tenerte A Mi Lado
          </h2>
          <p id="parent-modal-description">
            No Encuentro Palabras Para Explicarte El Amor Tan Inmenso Que Siento
            Por Vos
          </p>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}
