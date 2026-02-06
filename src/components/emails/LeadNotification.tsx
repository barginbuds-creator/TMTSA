import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
    Tailwind,
} from "@react-email/components";
import * as React from "react";

interface LeadNotificationEmailProps {
    name: string;
    phone: string;
    email: string;
    serviceType: string;
    message: string;
    source?: string;
}

export default function LeadNotificationEmail({
    name,
    phone,
    email,
    serviceType,
    message,
    source = "Website Quote Form",
}: LeadNotificationEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New Lead: {serviceType} - {name}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            New <strong>{serviceType}</strong> Lead
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong>Source:</strong> {source}
                        </Text>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                        <Section>
                            <Text className="text-black text-[14px] leading-[24px]">
                                <strong>Name:</strong> {name}
                            </Text>
                            <Text className="text-black text-[14px] leading-[24px]">
                                <strong>Phone:</strong> <a href={`tel:${phone}`} className="text-blue-600 no-underline">{phone}</a>
                            </Text>
                            <Text className="text-black text-[14px] leading-[24px]">
                                <strong>Email:</strong> <a href={`mailto:${email}`} className="text-blue-600 no-underline">{email}</a>
                            </Text>
                            <Text className="text-black text-[14px] leading-[24px]">
                                <strong>Message:</strong>
                            </Text>
                            <Text className="text-black text-[14px] leading-[24px] bg-gray-100 p-4 rounded">
                                {message}
                            </Text>
                        </Section>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                        <Text className="text-[#666666] text-[12px] leading-[24px]">
                            This email was sent from the TMT Website Quote Form.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}

LeadNotificationEmail.PreviewProps = {
    name: "John Doe",
    phone: "071 123 4567",
    email: "john@example.com",
    serviceType: "Waterproofing",
    message: "I have a leaking roof that needs urgent attention.",
} as LeadNotificationEmailProps;
