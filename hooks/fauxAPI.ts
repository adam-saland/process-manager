import { Identity } from "openfin-adapter";
import { EntityProcessDetails } from 'openfin-adapter/src/shapes/process_info'

import { ProcessModel } from "./api";

export const rvmInfo = async () => {
    return { version: '0.0.0' }
}

export const showDeveloperTools = (id:Identity) => {
    console.log('noop showDeveloperTools', id);
}

export const closeItem = async (id:Identity) => {
    console.log('noop closeItem', id);
}

export const getItemInfo = (id:Identity) => {
    return {
        default_icon: "default_icon.png",
        licenseKey: "64605fac-add3-48a0-8710-64b38e96a2dd",
        devtools_port: 9090,
        websocket_port: 9696,
        logging: true,
        startup_app: {
            name: "process-manager",
            version: "1.7.3",
            description: "Process Manager",
            url: "https://cdn.openfin.co/process-manager/index.html",
            uuid: "process-manager",
            defaultHeight: 800,
            defaultWidth: 600,
            applicationIcon: "https://cdn.openfin.co/process-manager/img/proc-mgr-icon.png",
            company: "OpenFin",
            autoShow: true
        },
        runtime: {
            arguments: "",
            version: "stable"
        },
        splashScreenImage: "https://cdn.openfin.co/process-manager/img/proc-mgr-splash.png",
        shortcut: {
            company: "OpenFin",
            description: "OpenFin Process Manager",
            icon: "https://cdn.openfin.co/process-manager/img/proc-mgr-icon.ico",
            name: "Process Manager"
        }
    };
}

export const rescueWindow = async (id:Identity) => {
    console.log('noop rescueWindow', id);
}

export const toggleWindowVisibility = async (id:Identity, visible:boolean) => {
    console.log('noop toggleWindowVisibility', id);
}

export const getProcessTree = async ():Promise<ProcessModel> => {
    return { applications: [
        {
            key: '1',
            url: 'https://home.openfin.co/app.json',
            processInfo: { pid: 67839 },
            identity: { uuid: 'home-platform', name: 'Home Platform', entityType: 'application' },
            description: 'home platform oh yeah',
            company: 'OpenFin Inc.',
            isPlatform: true,
            icon: '',
            title: 'Home Platform',
            runtimeVersion: 'canary',
            isRunning: true,
            children: [
                {
                    key: '11',
                    identity: { uuid: 'home-platform', entityType: 'window' },
                    title: 'Window 1-1',
                    url: 'https://home.openfin.co/platform/window.html',
                    processInfo: { pid: 67840 },
                    visible: false,
                },
                {
                    key: '12',
                    identity: { uuid: 'home-platform', entityType: 'window' },
                    url: 'https://home.openfin.co/platform/window.html',
                    title: 'Window 1-2',
                    processInfo: { pid: 67839 },
                    visible: true,
                    children: [
                        {
                            key: '121',
                            identity: { uuid: 'home-platform', name: 'View 1-2-1', entityType: 'view' },
                            title: 'View 1-2-1',
                            url: 'https://mail.google.com/',
                            processInfo: { pid: 67840 },
                        }
                    ]
                },
                {
                    key: '13',
                    identity: { uuid: 'home-platform', entityType: 'window' },
                    title: 'Window 1-3',
                    url: 'https://home.openfin.co/platform/window.html',
                    processInfo: { pid: 67841 },
                    visible: true,
                    children: [
                        {
                            key: '131',
                            identity: { uuid: 'home-platform', name: 'View 1-3-1', entityType: 'view' },
                            title: 'View 1-3-1',
                            url: 'https://cnn.com/',
                            processInfo: { pid: 67840 },
                        },
                        {
                            key: '132',
                            identity: { uuid: 'home-platform', name: 'View 1-3-2', entityType: 'view' },
                            title: 'View 1-3-2',
                            url: 'https://fox.com/',
                            processInfo: { pid: 67840 },
                        },
                        {
                            key: '133',
                            identity: { uuid: 'home-platform', name: 'View 1-3-3', entityType: 'view' },
                            title: 'View 1-3-3',
                            url: 'https://bbc.com/',
                            processInfo: { pid: 67840 },
                        }
                    ]
                }
            ]
        },
        {
            key: '2',
            identity: { uuid: 'process-manager', name: 'Process Manager', entityType: 'application' },
            url: 'https://pm.openfin.co/app.json',
            processInfo: { pid: 67838 },
            description: 'Process Manager - An OpenFin Debugging and Diagnostic Tool',
            company: 'OpenFin Inc.',
            isPlatform: false,
            icon: '',
            title: 'Process Manager',
            runtimeVersion: 'stable',
            isRunning: true,
            children: [
                {
                    key: '21',
                    identity: { uuid: 'process-manager', entityType: 'window' },
                    title: 'main-window',
                    url: 'https://pm.openfin.co/',
                    processInfo: { pid: 67840 },
                    visible: true,
                },
            ]
        },
    ]};
}

// export const getPIDEntities = async (pid: number):Promise<EntityProcessDetails[]> => {
export const getPIDEntities = async (pid: number):Promise<any[]> => {
    return [
        {
            key: 1,
            uuid: 'asdf',
            url: 'https://some.shit.url/fake/path',
            cpu: 0,
            mem: 876678879
        },
        {
            key: 2,
            uuid: 'fdsa',
            url: 'https://some.shit.url/fake/path',
            cpu: 0,
            mem: 9267345
        }
    ];
}
