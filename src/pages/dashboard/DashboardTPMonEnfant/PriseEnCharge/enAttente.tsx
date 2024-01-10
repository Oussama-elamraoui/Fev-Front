import React, { useState, useEffect } from 'react'
import { Button, Header, Card, Divider, Image, Placeholder, Reveal, Icon, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import folder from '../../../../assets/images/folders.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
const EnAttente = () => {
    const [open, setOpen] = React.useState(false)
    const [open1, setOpen1] = React.useState(false)
    function getWindowDimensions() {
        const { innerWidth: width } = window;
        return width;
        ;
    }
    return (
        <>
            <Card.Group className='mt-3'>
                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src={folder}

                        />

                        <Card.Header>Mohamed kamal</Card.Header>
                        <Card.Meta ><Icon name='map marker alternate' color='grey'></Icon> Center bouknadel</Card.Meta>
                        <Card.Description style={{ color: 'grey' }}>
                            <Icon name='user' color='grey'></Icon>
                            <strong>Patient : </strong>Doha anouar
                            <Icon name="eye" style={{ cursor: 'pointer', width: '10%' }} fitted></Icon>
                        </Card.Description>

                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green' onClick={() => setOpen1(true)}>
                                Accepter
                            </Button>
                            <Button basic color='red' onClick={() => setOpen(true)}>
                                rejeter
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://th.bing.com/th/id/OIP.CyapVUeGENzDHXuGCsbj4QAAAA?pid=ImgDet&w=208&h=201&c=7&dpr=1.5'

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
                            <Button basic color='green' onClick={() => setOpen1(true)}>
                                Accepter
                            </Button>
                            <Button basic color='red' onClick={() => setOpen(true)}>
                                rejeter
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://th.bing.com/th/id/OIP.CyapVUeGENzDHXuGCsbj4QAAAA?pid=ImgDet&w=208&h=201&c=7&dpr=1.5'

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
                            <Button basic color='green' onClick={() => setOpen1(true)}>
                                Accepter
                            </Button>
                            <Button basic color='red' onClick={() => setOpen(true)}>
                                rejeter
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://th.bing.com/th/id/OIP.CyapVUeGENzDHXuGCsbj4QAAAA?pid=ImgDet&w=208&h=201&c=7&dpr=1.5'

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
                            <Button basic color='green' onClick={() => setOpen1(true)}>
                                Accepter
                            </Button>
                            <Button basic color='red' onClick={() => setOpen(true)}>
                                rejeter
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://th.bing.com/th/id/OIP.CyapVUeGENzDHXuGCsbj4QAAAA?pid=ImgDet&w=208&h=201&c=7&dpr=1.5'

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
                            src='https://th.bing.com/th/id/OIP.CyapVUeGENzDHXuGCsbj4QAAAA?pid=ImgDet&w=208&h=201&c=7&dpr=1.5'

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
                            <Button basic color='green' onClick={() => setOpen1(true)}>
                                Accepter
                            </Button>
                            <Button basic color='red' onClick={() => setOpen(true)}>
                                rejeter
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>

            {/* <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
                <div className='balise'></div>
                <div className="folder-card">
                    <div className="folder-icon"></div>
                    <div className="card-body">
                        <h5 className="card-title">Folder Name</h5>
                        <p className="card-text">Folder Description</p>
                        <a href="#" className="btn btn-primary">Open Folder</a>
                    </div>
                </div>
            </div> */}


            <Modal
                basic
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                size='small'
                style={{ width: getWindowDimensions(), margin: 'auto', textAlign: 'center' }}
            >
                <Header icon style={{ paddingTop: '200px', margin: 'auto' }}>
                    <Icon name='trash alternate' color='red' />
                    Voulez-vous vraiment rejeter ce dossier ?
                </Header>
                <Modal.Content style={{ paddingTop: '20px' }}>
                    <Button basic color='red' inverted onClick={() => setOpen(false)}>
                        <Icon name='remove' color='red' /> No
                    </Button>
                    <Button color='green' inverted onClick={() => setOpen(false)}>
                        <Icon name='checkmark' /> Yes
                    </Button>
                </Modal.Content>

            </Modal>
            <Modal
                basic
                onClose={() => setOpen1(false)}
                onOpen={() => setOpen1(true)}
                open={open1}
                size='small'
                style={{ width: getWindowDimensions(), margin: 'auto', textAlign: 'center' }}
            >
                <Header icon style={{ paddingTop: '200px', margin: 'auto' }}>
                    <Icon name='checkmark box' />
                    Voulez-vous vraiment Accepter ce dossier ?
                </Header>
                <Modal.Content style={{ paddingTop: '20px' }}>
                    <Button basic color='red' inverted onClick={() => setOpen1(false)}>
                        <Icon name='remove' /> No
                    </Button>
                    <Button color='green' inverted onClick={() => setOpen1(false)}>
                        <Icon name='checkmark' /> Yes
                    </Button>
                </Modal.Content>

            </Modal>
        </>)
}
export default EnAttente;