import React, { useState } from 'react';
import { UnmountClosed as Collapse } from 'react-collapse';
import { presets } from 'react-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import classNames from 'classnames';

import { propTypes, defaultProps } from './types';
import Card from '../../../../components/Card';
import Text from '../../../../components/Text';
import Players from './components/Players';

const TeamCard = ({ classes, team }) => {
  const [opened, setOpened] = useState(false);

  return (
    <Card className={classes.card} onClick={() => setOpened(!opened)} data-test-id="Card">
      <span className={classes.outcome}>
        <Text>
          { `${team.lastPlayed.outcome === 'Loss' ? 'Lost' : 'Won'} their last game` }
        </Text>
      </span>
      <div className={classes.root}>
        <div className={classes.small}>
          <div>
            <Text caption>
              Rank
            </Text>
            <Text bold>
              { team.rank }
            </Text>
          </div>
          <div>
            <Text caption>
              Rating
            </Text>
            <Text bold>
              { team.lastPlayed.rating }
            </Text>
          </div>
        </div>
        <div className={classes.nameWrapper}>
          <Text h4>
            { team.name }
          </Text>
          <Text caption bold>
            { team.realm }
          </Text>
        </div>
        <div className={classNames(classes.small, classes.lastPlayed)}>
          <Text caption>
            Last Played
          </Text>
          <Text bold>
            { team.lastPlayed.time }
          </Text>
        </div>
      </div>
      <Collapse
        isOpened={opened}
        className={classes.collapse}
        springConfig={presets.gentle}
      >
        <Players players={team.players} />
      </Collapse>
      {
        opened
          ? <FiChevronUp className={classes.icon} data-test-id="ChevronUp" />
          : <FiChevronDown className={classes.icon} data-test-id="ChevronDown" />
      }
    </Card>
  );
};

TeamCard.propTypes = propTypes;

TeamCard.defaultProps = defaultProps;

export default TeamCard;
