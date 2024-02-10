import { Container, Board, Title, Item } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <Board>
        {stats.map(stat => (
          <Item key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </Item>
        ))}
      </Board>
    </Container>
  );
}
