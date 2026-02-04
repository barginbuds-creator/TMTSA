import {
    pgTable,
    serial,
    text,
    timestamp,
    boolean,
    varchar,
} from 'drizzle-orm/pg-core';

export const newsletterSubs = pgTable('newsletter_subs', {
    id: serial('id').primaryKey(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const quoteRequests = pgTable('quote_requests', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    phone: varchar('phone', { length: 50 }),
    serviceType: varchar('service_type', { length: 100 }),
    message: text('message'),
    status: varchar('status', { length: 20 }).default('pending').notNull(), // pending, contacted, closed
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const blogPosts = pgTable('blog_posts', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 255 }).notNull(),
    slug: varchar('slug', { length: 255 }).notNull().unique(),
    content: text('content').notNull(), // HTML content
    imageUrl: text('image_url'),
    isPublished: boolean('is_published').default(false).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const projects = pgTable('projects', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 255 }).notNull(),
    location: varchar('location', { length: 255 }),
    description: text('description'),
    beforeImageUrl: text('before_image_url'),
    afterImageUrl: text('after_image_url'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});
