export function getStaticProps() {
    const envDb = ({
        publicKey: process.env.REACT_APP_YOUR_PUBLIC_KEY as string,
        templateId: process.env.REACT_APP_YOUR_TEMPLATE_ID as string,
        serviceId: process.env.REACT_APP_YOUR_SERVICE_ID as string,
    });
   
    return envDb;
}