/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
import React from 'react';
// import Loader from './common/loader';
const Loader=()=><p>loading..</p>
export const loadComponent = (scope, module) => async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__('default');
    const container = window[scope]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
};

const useDynamicScript = (args) => {
    const [ready, setReady] = React.useState(false);
    const [failed, setFailed] = React.useState(false);

    React.useEffect(() => {
        if (!args.url) {
            return;
        }

        const element = document.createElement('script');

        element.src = args.url;
        element.type = 'text/javascript';
        element.async = true;

        setReady(false);
        setFailed(false);

        element.onload = () => {
            console.log(`Dynamic Script Loaded: ${args.url}`);
            setReady(true);
        };

        element.onerror = () => {
            console.error(`Dynamic Script Error: ${args.url}`);
            setReady(false);
            setFailed(true);
        };

        document.head.appendChild(element);

        return () => {
            console.log(`Dynamic Script Removed: ${args.url}`);
            document.head.removeChild(element);
        };
    }, [args.url]);

    return {
        ready,
        failed,
    };
};

function System(props) {
    const { ready, failed } = useDynamicScript({
        url: props.system && props.system.url,
    });

    if (!props.system) {
        return <Loader />;
    }

    // if (!ready) {
    //     return <h2>Loading dynamic script: {props.system.url}</h2>;
    // }

    if (!ready) {
        return <Loader />;
    }

    if (failed) {
        return <h2>Failed to load dynamic script: {props.system.url}</h2>;
    }

    const Component = loadComponent(props.system.scope, props.system.module);
    console.log('X',Component);
    // const Component = React.lazy(() => import("app2/Widget"))
    return (
        <React.Suspense fallback={<Loader />}>
            <Component {...props} />
        </React.Suspense>
    );
}
export default System;
