import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import {
  makeSelectError,
  makeSelectLoading,
  makeSelectRepos,
} from 'containers/App/selectors';
import PropTypes from 'prop-types';
import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import user from '../../images/user.png';
// import imageLogo from '../../images/codemi-394x150.png';
import { loadRepos } from '../App/actions';
import { getData } from './actions';
import './index.css';
import reducer from './reducer';
import saga from './saga';
import { makeSelectUsername } from './selectors';
const key = 'home';

export function HomePage({ loading, error }) {
  const { Header, Content, Sider } = Layout;
  const { SubMenu } = Menu;
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    // if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  // const reposListProps = {
  //   loading,
  //   error,
  //   repos,
  // };

  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          {/* <img src={iconCodemi} alt="iconCodemi" className="userLogo" /> */}
        </div>
        <Menu theme="ligh" mode="horizontal" className="navbar">
          <SubMenu
            key="sub1"
            title={
              <span>
                <img src={user} alt="logo" className="userLogo" />
              </span>
            }
          >
            <Menu.Item key="1">Logout</Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            className="sidebarMenu"
          >
            <Menu.Item key="1" className="menu">
              Home
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content
            className="content"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  // onSubmitForm: PropTypes.func,
  // username: PropTypes.string,
  // onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
