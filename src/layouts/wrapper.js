// @flow

import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";

import {
  Site,
  Nav,
  Grid,
  List,
  Button,
} from "tabler-react";

import type { NotificationProps } from "tabler-react";

type Props = {|
  +children: React.Node,
|};

type State = {|
  notificationsObjects: Array<NotificationProps>,
|};

type subNavItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +LinkComponent?: React.ElementType,
  +useExact?: boolean,
|};

type navItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +active?: boolean,
  +LinkComponent?: React.ElementType,
  +subItems?: Array<subNavItem>,
  +useExact?: boolean,
|};

const navBarItems: Array<navItem> = [
  {
    value: "Home",
    to: "/",
    icon: "home",
    useExact: true,
    LinkComponent: (NavLink)
  },
  {
    value: "Trips",
    icon: "box",
    style:{cursor:'pointer'},
    subItems: [
      {
        value: "Current trips",
        to: "/current",
        LinkComponent: withRouter(NavLink)
       
      },
      { value: "Over trips", to: "/over", LinkComponent: withRouter(NavLink) }
    ]
  },
  {
    value: "Drivers",
    icon: "hard-drive",
    style:{cursor:'pointer'},
    subItems: [
      { value: "online", to: "/online"  },
      { value: "offline", to: "/offline" },
      { value: "all", to: "/all" }
    ]
  }
];

const accountDropdownProps = {
  name: "Saleh Almohtaseb",
  description: "Administrator",
  style:{cursor:'pointer'},
  options: [
    { icon: "user", value: "Profile" },
    { icon: "settings", value: "Settings" },
    { icon: "mail", value: "Inbox", badge: "6" },
    { icon: "send", value: "Message" },
    { isDivider: true },
    { icon: "log-out", value: "Sign out" },
  ],
};

class SiteWrapper extends React.Component<Props, State> {
  state = {
    notificationsObjects: [
      {
        unread: true,
        message: (
          <React.Fragment>
            <strong>Someone</strong>
          </React.Fragment>
        ),
        time: "10 minutes ago",
      }
    ],
  };

  render(): React.Node {
    const notificationsObjects = this.state.notificationsObjects || [];
    const unreadCount = this.state.notificationsObjects.reduce(
      (a, v) => a || v.unread,
      false
    );
    return (
      <Site.Wrapper
        headerProps={{
          href: "/",
          alt: "React Dashboard",
          imageURL: "../../logo192.png",

          notificationsTray: {
            notificationsObjects,
            markAllAsRead: () =>
              this.setState(
                () => ({
                  notificationsObjects: this.state.notificationsObjects.map(
                    v => ({ ...v, unread: false })
                  ),
                }),
                () =>
                  setTimeout(
                    () =>
                      this.setState({
                        notificationsObjects: this.state.notificationsObjects.map(
                          v => ({ ...v, unread: true })
                        ),
                      }),
                    5000
                  )
              ),
            unread: unreadCount,
          },
          accountDropdown: accountDropdownProps,
        }}
        navProps={{ itemsObjects: navBarItems }}
        footerProps={{
          links: [
            <a href="#">First Link</a>,
            <a href="#">Second Link</a>,
            <a href="#">Third Link</a>,
            <a href="#">Fourth Link</a>,
            <a href="#">Five Link</a>,
            <a href="#">Sixth Link</a>,
            <a href="#">Seventh Link</a>,
            <a href="#">Eigth Link</a>,
          ],
          note:
            "Premium and Open Source dashboard template with responsive and high quality UI. For Free!",
          copyright: (
            <React.Fragment>
              Copyright © 2019
              <a href="."> Tabler-react</a>. Theme by
              <a
                href="https://codecalm.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                codecalm.net
              </a>{" "}
              All rights reserved.
            </React.Fragment>
          ),
          nav: (
            <React.Fragment>
              <Grid.Col auto={true}>
                <List className="list-inline list-inline-dots mb-0">
                  <List.Item className="list-inline-item">
                    <a href="./docs/index.html">Documentation</a>
                  </List.Item>
                  <List.Item className="list-inline-item">
                    <a href="./faq.html">FAQ</a>
                  </List.Item>
                </List>
              </Grid.Col>
              <Grid.Col auto={true}>
                <Button
                  href="https://github.com/tabler/tabler-react"
                  size="sm"
                  outline
                  color="primary"
                  RootComponent="a"
                >
                  Source code
                </Button>
              </Grid.Col>
            </React.Fragment>
          ),
        }}
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;
