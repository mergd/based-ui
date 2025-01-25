"use client"

import * as React from "react"
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form"

/********
Form
********/
interface FormProps<T extends FieldValues = FieldValues>
	extends React.FormHTMLAttributes<HTMLFormElement> {
	form: UseFormReturn<T>
}

const Form = <T extends FieldValues>({
	children,
	form,
	...props
}: FormProps<T>) => (
	<FormProvider {...form}>
		<form {...props}>{children}</form>
	</FormProvider>
)

export { Form }
