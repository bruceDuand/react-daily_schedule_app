import React from 'react';
import { Layout, Menu, Icon, Button } from 'antd';
import { Typography } from 'antd';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

const { Header, Sider, Content } = Layout
const { Title } = Typography

class SBookLayout extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
        collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout>
                <Sider
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
                >
                <div className="logo" />
                <Menu theme="dark" mode="inline">
                    <Menu.Item key="1">
                        <Link to="/">
                            <Icon type="appstore" />
                            <span>List</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/2">
                            <Icon type="user" />
                            <span>Detail</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/">
                            <Icon type="file-add" />
                            <span>Today's Schedule</span>
                        </Link>
                    </Menu.Item> 
                    {
                        this.props.isAuthenticated ? 
                        
                        <Menu.Item key="4" onClick={this.props.logout }>
                                <Icon type="logout" />
                                <span>Logout</span>
                        </Menu.Item>
                        :
                        <Menu.Item key="4">
                            <Link to="/login">
                                <Icon type="login" />
                                <span>Login</span>
                            </Link>
                        </Menu.Item>
                    }

                </Menu>
                </Sider>
                <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Row>
                        <Col span={4}>
                            <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                            />
                        </Col>
                        <Col span={14}>
                            <Title 
                                level={2}
                                style={{ textAlign: "center", margin: "10px 5px" }}
                            >
                                Schedule Book
                            </Title>
                        </Col>
                        <Col span={6}>
                            <Button 
                                type="primary"
                                style={{ textAlign: "right", margin: "10px 100px" }}
                            >
                                Logout
                            </Button>
                        </Col>
                    </Row>
                </Header>
                <Content style={{
                    margin: '24px 16px', padding: 24, background: '#fff', minHeight: 300,
                }}
                >
                    {this.props.children}
                </Content>
                </Layout>
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(SBookLayout);
  