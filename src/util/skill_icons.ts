import angular_logo from '../assets/branches/angular.svg';
import react_logo from '../assets/branches/react.svg';
import spring_logo from '../assets/branches/spring.svg';
import node_logo from '../assets/branches/node.svg';
import ts_logo from '../assets/branches/typsecript.svg';
import js_logo from '../assets/branches/javascript.svg';
import java_logo from '../assets/branches/java.svg';
import rust_logo from '../assets/branches/rust.svg';
import pg_logo from '../assets/branches/postgresql.svg';
import mysql_logo from '../assets/branches/mysql.svg';
import docker_logo from '../assets/branches/docker.svg';
import figma_logo from '../assets/branches/figma.svg';

export interface Icon {
    icon: string;
    label: string;
}

export const icons: Icon[] = [
    {
        icon: angular_logo,
        label: 'Angular'
    },
    {
        icon: react_logo,
        label: 'React'
    },
    {
        icon: spring_logo,
        label: 'Spring'
    },
    {
        icon: node_logo,
        label: 'Node.js'
    },
    {
        icon: ts_logo,
        label: 'Typescript'
    },
    {
        icon: js_logo,
        label: 'Javascript'
    },
    {
        icon: java_logo,
        label: 'Java'
    },
    {
        icon: rust_logo,
        label: 'Rust'
    },
    {
        icon: pg_logo,
        label: 'PostgreSQL'
    },
    {
        icon: mysql_logo,
        label: 'MySQL'
    },
    {
        icon: docker_logo,
        label: 'Docker'
    },
    {
        icon: figma_logo,
        label: 'Figma'
    },
]