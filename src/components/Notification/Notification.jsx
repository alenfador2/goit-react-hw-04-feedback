import css from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <>
      <h2 className={css['notification-header']}>{message}</h2>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
