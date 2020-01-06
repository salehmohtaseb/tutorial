import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

export const notify = (message, type = 'success', options = {}) => {
    return store.addNotification({
        title: options.title || 'tutorial',
        message: message,
        type: type,                         // 'default', 'success', 'info', 'warning', 'danger'
        container: 'top-center',                // where to position the notifications
        animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
        width: 450,
        dismiss: {
            duration: options.duration || 4000
        }
    })
}