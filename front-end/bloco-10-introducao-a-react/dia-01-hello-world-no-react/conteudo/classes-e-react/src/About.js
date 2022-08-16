import React, { Component } from 'react'

class About extends Component {
    render () {
        const skills = ['HTML', 'CSS', 'JS', 'JEST', 'REACT', 'GIT', 'NODEJS']
        const jsxSkills = skills.map((skill) => <li>{skill}</li>)
        return <div className='main'>
            <h1 className='title'>Thierry de Ridder Martins Varela</h1>
            <p className='apresentation'>Curitibano, formado em Tecnologia em Negócios Imobiliários pela 
            Universidade Federal do Paraná.<br></br> Estudante de desenvolvimento web full-stack na Trybe.</p>
            <ul className='skills'>
                {jsxSkills}
            </ul>
        </div>
    }
}

export default About;