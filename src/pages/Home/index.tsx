import { Button } from '@arco-design/web-react';
import Frame from 'components/Frame';
import { Stack } from 'components/Stack';
import templates from 'config/templates.json';
import { useAppSelector } from 'hooks/useAppSelector';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import templateList from 'store/templateList';
import { history } from 'utils/history';
import { pushEvent } from 'utils/pushEvent';
import { CardItem } from './components/CardItem';

export default function Home() {
  const dispatch = useDispatch();
  const list = useAppSelector('templateList');

  useEffect(() => {
    dispatch(templateList.actions.fetch(undefined));
  }, [dispatch]);

  return (
    <Frame
      title="Templates"
      primaryAction={
        <Button
          onClick={() => {
            pushEvent({ event: 'Create' });
            history.push('/editor');
          }}
        >
          Add
        </Button>
      }
    >
      <Stack>
        {[...templates, ...list].map(item => (
          // @ts-ignore
          <CardItem data={item} key={item.article_id} />
        ))}
      </Stack>
    </Frame>
  );
}
