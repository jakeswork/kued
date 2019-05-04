import React, { Component } from 'react';

import propTypes from './types';
import MainLayout from '../../layouts/MainLayout';
import Text from '../../components/Text';
import Card from '../../components/Card';
import Emoji from '../../components/Emoji';
import ResponsiveModal from './components/ResponsiveModal';

export const cardStyles = {
  cursor: 'pointer',
  width: '25%',
  minWidth: 240,
};

class Contact extends Component {
  static propTypes = propTypes;

  state = {
    showType: null,
  }

  close = cb => this.setState(({ showType: null }), typeof cb === 'function' ? cb : () => {})

  showHelp = showType => this.close(() => setTimeout(() => this.setState({ showType }), 300))

  render() {
    const { classes } = this.props;
    const { showType } = this.state;

    return (
      <MainLayout>
        <Text h1>
          How can we help?
        </Text>
        <Text caption>Click on a card to learn more.</Text>
        <div className={classes.cardsWrapper}>
          <Card
            style={cardStyles}
            onClick={() => this.showHelp('support')}
            data-test-id="supportCard"
          >
            <Text h4>
              Help us help you&nbsp;
              <Emoji icon="🤝" label="handshake" />
            </Text>
            <Text bold caption>Want to help out by supporting the project?</Text>
          </Card>
          <Card style={cardStyles} onClick={() => this.showHelp('bug')}>
            <Text h4>
              Something not right?&nbsp;
              <Emoji icon="🛠" label="hammer-and-wrench" />
            </Text>
            <Text bold caption>Let us know if you&apos;re having any problems.</Text>
          </Card>
          <Card style={cardStyles} onClick={() => this.showHelp('vote')}>
            <Text h4>
              Missing out?&nbsp;
              <Emoji icon="😭" label="loudly-crying-face" />
            </Text>
            <Text bold caption>Vote for us to come to your server.</Text>
          </Card>
        </div>
        <ResponsiveModal in={showType === 'support'} onClose={this.close}>
          <Text h3>Supporting Kued</Text>
        </ResponsiveModal>
        <ResponsiveModal in={showType === 'bug'} onClose={this.close}>
          <Text h3>Reporting Issues</Text>
        </ResponsiveModal>
        <ResponsiveModal in={showType === 'vote'} onClose={this.close}>
          <Text h3>Server Requests</Text>
        </ResponsiveModal>
      </MainLayout>
    );
  }
}

export default Contact;
