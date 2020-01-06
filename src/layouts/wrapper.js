// @flow

import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";

import {
  Site,
  RouterContextProvider
} from "tabler-react";

import type { NotificationProps } from "tabler-react";

type Props = {|
  +children: React.Node,
|};

type State = {|
  notificationsObjects: Array < NotificationProps >,
|};

type navItem = {|
  +value: string,
  +to ?: string,
  +icon ?: string,
  +active ?: boolean,
  +LinkComponent ?: React.ElementType,
  +useExact ?: boolean,
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
    to: "/",
    icon: "box",
    LinkComponent: (NavLink),
    useExact: true
  },
  {
    value: "Drivers",
    to: "/",
    icon: "hard-drive",
    useExact: true,
    LinkComponent: (NavLink)
  }
];

const accountDropdownProps = {
  avatarURL: "../../logo192.png",
  name: "Saleh Almohtaseb",
  description: "Administrator",
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
            unread: unreadCount
          },
          accountDropdown: accountDropdownProps

        }}
        navProps={{ itemsObjects: navBarItems }}
        routerContextComponentType={withRouter(RouterContextProvider)}
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;
