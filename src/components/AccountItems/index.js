import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from '../AccountItems/AccountItems.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/7b9095035c5ff40a10138c4a07242cdb.jpeg?lk3s=a5d48078&nonce=11679&refresh_token=a65c6c8d155aa218da891cbf0e188704&x-expires=1727877600&x-signature=byE7w%2FFm54r3xxWtQeV5Lyba0Dk%3D&shp=a5d48078&shcp=81f88b70"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Spiciyuuu</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Spiciyuuu</span>
            </div>
        </div>
    );
}
export default AccountItem;