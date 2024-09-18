import { Theme, Flex, Section } from '@radix-ui/themes';
import Map from './map'

export default function Home() {
  return (
    <div>
        <Theme>
          <Section>
            <Flex justify="center">
              <h1>Home</h1>
            </Flex>
          </Section>
          <Map />
        </Theme>
    </div>
  );
}
