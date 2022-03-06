import React, {useState, useEffect} from "react";
import {Accordion, Nav} from "react-bootstrap";

import "./Sidebar.scss";

const Sidebar = ({content, setContent}) => {
    const [sidebar, setSidebar] = useState([]);
    const [activeContent, setActiveContent] = useState();

    const updateContent = (page) => {
        if (setContent){
            setContent(page);
            setActiveContent(page.id)
            window.scrollTo(0, 0);
        }
    }
    
    useEffect(() => {
        setSidebar(content.sidebar)
        setActiveContent(content.defaultPage)
    }, [content]);  

    return (
        <div className="sidebar" >
            <Accordion defaultActiveKey="0" flush>
                {sidebar.map((sidebarParent, indexParent) => 
                    <Accordion.Item eventKey={indexParent.toString()} key={indexParent}>
                        <Accordion.Header>{sidebarParent.name}</Accordion.Header>
                        <Accordion.Body>
                            <Nav className="flex-column">
                                {sidebarParent.pages.map((sidebarChild, indexChild) => 
                                    <Nav.Link key={indexChild} 
                                        className={activeContent == sidebarChild.id && 'active'} 
                                        onClick={() => {updateContent(sidebarChild)}}>
                                            {sidebarChild.name}
                                    </Nav.Link>                                
                                )}
                            </Nav>
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>
        </div>
    );
}

export default Sidebar;