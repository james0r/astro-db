import { db, Todo } from 'astro:db';

export default async function() {
  await db.insert(Todo).values([
    { task: 'Learn Astro', completed: false },
    { task: 'Build something', completed: false },
    { task: 'Profit!', completed: false },
  ])
}