import React, { Component } from 'react';
import Client from '../../layouts/Client/Client';
import Container from '@material-ui/core/Container';
import { HomeRoute } from '../../config/routes';

class Home extends Component {

  render() {
    return (
      <Client>
        <section>
          <Container maxWidth='sm'>
            <h1>{HomeRoute.name}</h1>
            <p>
              <strong>Тестовое приложение: realtime-chart</strong>
            </p>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
          </Container>
        </section>
      </Client>
    );
  }
}

export default Home;