import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkGfm from 'remark-gfm'
import rehypeReact, { type Options } from 'rehype-react'
import jsxRuntime from 'react/jsx-runtime'
import { Heading } from '@/components/Heading'

type MarkdownProps = {
	children?: string
}

export const Markdown = ({ children }: MarkdownProps) => {
	const rehypeOptions: Options = {
		...jsxRuntime,
		components: {
			h1: props => <Heading level={1} {...props} />,
			h2: props => <Heading level={2} {...props} />,
			h3: props => <Heading level={3} {...props} />,
			h4: props => <Heading level={4} {...props} />,
			h5: props => <Heading level={5} {...props} />,
			h6: props => <Heading level={6} {...props} />,
		},
	}

	const jsx = unified()
		.use(remarkParse, { fragment: true })
		.use(remarkGfm)
		.use(remarkRehype)
		.use(rehypeReact, rehypeOptions)
		.processSync(children).result

	return <>{jsx}</>
}
