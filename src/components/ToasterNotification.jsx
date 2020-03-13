
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
const ToasterNotification = (title = 'Toaster', message = 'this is a toaster', type = 'default', container = 'top-right', duration = 2500) => {
    store.addNotification({
        title,
        message,
        type,
        insert: "top",
        container,
        animationIn: ["animated", "flipInX"],
        animationOut: ["animated", "flipOutX"],
        dismiss: {
            duration,
            onScreen: true,
            showIcon: true
        }
    });
}

export default ToasterNotification;