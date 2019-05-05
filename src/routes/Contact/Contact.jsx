import React, { Component } from 'react';
import { FiAlertTriangle, FiHeart, FiThumbsUp } from 'react-icons/fi';

import propTypes from './types';
import MainLayout from '../../layouts/MainLayout';
import Text from '../../components/Text';
import Card from '../../components/Card';
import Emoji from '../../components/Emoji';
import ResponsiveModal from './components/ResponsiveModal';
import Button from '../../components/Button';

export const cardStyles = {
  cursor: 'pointer',
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
          <Text>
            Kued is an independent project with ongoing development
            made possible thanks to the support of awesome backers.
            If you&apos;d like to help us out in the best way possible,
            please consider joining them!
          </Text>
          <Button
            icon={<FiHeart />}
            success
            analyticsLabel="donationLink"
            link="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JG5ENWX7ADSKL&source=url"
          >
            Donate via PayPal
          </Button>
        </ResponsiveModal>
        <ResponsiveModal in={showType === 'bug'} onClose={this.close}>
          <Text h3>Reporting Issues</Text>
          <Text>
            We want to make Kued the best it can be. To do so, we need your help.
            We call on all users of Kued to report any problems
            they have encountered, so that we can tackle them head on
            and give all of our users the best experience.
          </Text>
          <Button
            danger
            link="https://forms.gle/gu9fpS2RZytgzSbj9"
            icon={<FiAlertTriangle />}
            analyticsLabel="bugReportLink"
          >
            Report a bug
          </Button>
        </ResponsiveModal>
        <ResponsiveModal in={showType === 'vote'} onClose={this.close}>
          <Text h3>Server Requests</Text>
          <Text>
            Is your server not yet supported by Kued?
            Let your voice be heard! Head over to the vote
            page to let us know where we&apos;re wanted!
          </Text>
          <Text bold caption>
            Once a server reaches 50 vote points it will be considered for development.
          </Text>
          <Button link="/vote" icon={<FiThumbsUp />}>Vote for your server</Button>
        </ResponsiveModal>
      </MainLayout>
    );
  }
}

export default Contact;
