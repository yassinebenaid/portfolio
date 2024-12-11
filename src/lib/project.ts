import client from "./sanity";

type Project = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  link?: string
  page: any[]
}

export const getProjects = client.createApiUtil<Project[]>(
  'getProjectsQuery',
  { next: { tags: ['projects'] } }
)