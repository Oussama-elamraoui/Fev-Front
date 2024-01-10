import React, { useState, useEffect } from 'react'
import { Button, Header, Card, Divider, Image, Placeholder, Reveal, Icon, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
const EnAttente = () => {
    const [open, setOpen] = React.useState(false)
    function getWindowDimensions() {
        const { innerWidth: width } = window;
        return width;
        ;
    }
    return (
        <>
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://th.bing.com/th/id/OIP.vb_GZ-sKu2saE3xB9xB-gwAAAA?pid=ImgDet&w=208&h=147&c=7&dpr=1.5'

                        />
                        <Card.Header>Mohamed kamal</Card.Header>
                        <Card.Meta>Center bouknadel</Card.Meta>
                        <Card.Description >
                            <strong>Patient : </strong>Doha anouar
                            <Icon name="eye" style={{ cursor: 'pointer', width: '10%' }} fitted></Icon>
                        </Card.Description>

                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red' onClick={() => setOpen(true)}>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://th.bing.com/th/id/OIP.vb_GZ-sKu2saE3xB9xB-gwAAAA?pid=ImgDet&w=208&h=147&c=7&dpr=1.5'
                        />
                        <Card.Header>Molly Thomas</Card.Header>
                        <Card.Meta>New User</Card.Meta>
                        <Card.Description>
                            Molly wants to add you to the group <strong>musicians</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='/images/avatar/large/jenny.jpg'
                        />
                        <Card.Header>Jenny Lawrence</Card.Header>
                        <Card.Meta>New User</Card.Meta>
                        <Card.Description>
                            Jenny requested permission to view your contact details
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
            <Modal
                basic
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                size='small'
                trigger={<Button>Basic Modal</Button>}
                style={{ width: getWindowDimensions(), margin: 'auto', textAlign: 'center' }}
            >
                <Header icon style={{ paddingTop: '200px', margin: 'auto' }}>
                    <Icon name='trash alternate' />
                    Voulez-vous vraiment rejeter ce dossier ?
                </Header>
                <Modal.Content style={{ paddingTop: '20px' }}>
                    <Button basic color='red' inverted onClick={() => setOpen(false)}>
                        <Icon name='remove' /> No
                    </Button>
                    <Button color='green' inverted onClick={() => setOpen(false)}>
                        <Icon name='checkmark' /> Yes
                    </Button>
                </Modal.Content>

            </Modal>
        </>)
}

export default EnAttente;