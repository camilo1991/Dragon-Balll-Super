import { Header as Head} from 'semantic-ui-react';

export default function Header(params) {
    return(
        <div className='header'>
            <Head as="h1">
                <Head.Content>Personajes de Dragon Ball Super</Head.Content>
            </Head>
        </div>
    )
};
