
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const ToasterNotification = () => {
    store.addNotification({
        title: "Wonderful!",
        message: "teodosii@react-notifications-component",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
            duration: 5000,
            onScreen: true
        }
    });
}

export default ToasterNotification;