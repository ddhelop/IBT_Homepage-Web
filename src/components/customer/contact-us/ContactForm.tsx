import React from 'react'
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
  message: string
  senderEmail: string
  title: string
  phone: string[]
}

export default function ContactFormEmail({ message, senderEmail, title, phone }: ContactFormEmailProps) {
  const [num0, num1, num2] = phone
  return (
    <Html>
      <Head />
      <Preview>홈페이지의 Contact Us로부터 이메일을 전송했습니다.</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">{title}</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>발송자 정보</Text>
              <Text>이메일: {senderEmail}</Text>
              <Text>
                전화번호: {num0}-{num1}-{num2}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
