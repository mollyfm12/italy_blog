import "./css/Tree.css";
import React from 'react';


function Tree(props) {
    return (
        <section className="tree">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </section>
    );
};

export default Tree;