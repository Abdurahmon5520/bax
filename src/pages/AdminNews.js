import React, { useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
// eslint-disable-next-line no-unused-vars
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { setState, saveNews, savFile, getNews, deleteNews } from '../redux/actions/newsAction';
import { getSubMenus } from '../redux/actions/menusActions';
import { get } from 'lodash';
import { API_PATH } from '../tools/constants';




const AdminNews = (props) => {
    
    useEffect(() => {
        props.getSubMenus();
        props.getNews();
    }, []);


    const generateUrl = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    const changeInput = (e) => {
        console.log(e.target.files);
        let data = new FormData();
        data.append("file", e.target.files[0])
        props.savFile(data);
        console.log(e.target.files[0]);
    }

    return (
            <AdminLayout history = {props.history}>
                <button type="button" className="btn-success btn d-block ml-auto"
                onClick={() => props.setState({open: true})}>
                  Add 
                </button>

                <div className="row">
                {props.news.map((item, index) => {
                    return (
                        <div className="col-4 mt-3 ">
                            <div className="card">
                                <div className="card-header">
                                    <h5>{item.titleUZ}</h5>
                                </div>
                                <div className="card-body">
                                    <img src={API_PATH + "file/get/" + item.photo.id} className="w-100" alt=""/>
                                    <p>{item.descriptionUz}</p>
                                    <p>Menu: <b>{item.menu.nameUz}</b></p>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <button  className="btn btn-primary">
                                       Edit
                                    </button>
                                    <button className="btn btn-danger" onClick={() => props.setState({deleteModal: true, selectedIndex: item.id})}>
                                       Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>

                <Modal isOpen={props.open} toggle={() => props.setState({open: false})}>
                    <AvForm onSubmit={props.saveNews}>
                    
                    <ModalBody>
                        <AvField
                        name="tittleUz"
                        type="text"
                        required
                        label="Tittle (UZ)"
                        onChange={(e) => props.setState({url: generateUrl(e.target.value)})}
                        />
                        <AvField
                        name="tittleRu"
                        type="text"
                        required
                        label="Tittle (RU)"
                        />
                        <AvField
                        name="tittleEn"
                        type="text"
                        required
                        label="Tittle (EN)"
                        /> 
                        <AvField
                        name="url"
                        type="text"
                        required
                        label="Url"
                        value={props.url}
                        />
                        <AvField
                        name="descriptionUz"
                        type="textarea"
                        required
                        label="Description (UZ)"
                        />
                        <AvField
                        name="descriptionRu"
                        type="textarea"
                        required
                        label="Description (RU)"
                        />
                        <AvField
                        name="descriptionEn"
                        type="textarea"
                        required
                        label="Description (EN)"
                        />
                          <AvField
                          name="menu"
                          type="select"
                          required>
                            <option>
                                Choose menu
                            </option>
                            {props.subMenus.map((item, index) => {
                                return (
                                    <option value={item.id}>{item.nameUz}</option>
                                )
                            })}
                          </AvField>  
                        
                            <input className=""
                            type="file" accept=".png, .svg, .jpg, .jpeg" onChange={changeInput}>
                            </input>
                            {props.photo.length > 0 ? <button className="w-25  iks btn btn-danger d-flex position-absolute ml-5 pl-5"  onClick={() => props.setState({photo: ""})}><span className="w-50">&times;</span></button> : "" }
                            <img src={API_PATH + "file/get/" +  props.photo} alt="" className="w-100 mt-3" />

                    </ModalBody>
                    <ModalFooter>
                        <button type="submit" className="btn-success btn" >
                            Save
                        </button>
                        <button type="button" className="btn-secondary btn" onClick={() => props.setState({open: false})}>
                            Cansel
                        </button>
                    </ModalFooter>
                    </AvForm>
                </Modal>
                <Modal isOpen={props.deleteModal} toggle={() => props.setState({deleteModal: false})}>
                    <ModalHeader>
                            <h3>Rostdan xam o'chitmoqchiisiz ?</h3>
                    </ModalHeader>
                    <ModalFooter>
                            <button type="button" className="btn btn-primary" onClick={() => props.deleteNews()}>Ha</button>
                            <button type="button" className="btn btn-danger" onClick={() => props.setState({deleteModal: false})}>Yo'q</button>

                    </ModalFooter>
                </Modal>
                </AdminLayout> 
    );
};

const mapStateToProps = (state) => {
    return{
        open: state.news.open,
        url: state.news.url,
        subMenus: state.menus.subMenus,
        photo: state.news.photo,
        news : state.news.news,
        selectedIndex: state.news.selectedIndex,
        deleteModal : state.news.deleteModal,
    }
}

export default connect(mapStateToProps,{setState, getSubMenus, saveNews, savFile, getNews, deleteNews}) (AdminNews);