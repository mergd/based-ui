import {
	Button,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogTitle,
	DialogTrigger,
} from "9ui"

export default function DialogDemo() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Privacy Policy</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogTitle>Privacy Policy</DialogTitle>
				<DialogDescription>
					Please read our privacy policy carefully.
				</DialogDescription>
				<div className="max-h-80 overflow-y-auto text-sm text-fg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					ultricies, odio quis blandit vestibulum, orci elit suscipit urna, at
					lobortis arcu enim vel purus. Maecenas luctus sem dui, lobortis
					dignissim enim consequat in. Nullam a volutpat purus. Aenean
					pellentesque eros nec rutrum suscipit. Fusce ac lectus volutpat,
					feugiat nulla et, suscipit dui. Pellentesque habitant morbi tristique
					senectus et netus et malesuada fames ac turpis egestas. Ut maximus,
					risus et convallis placerat, risus urna feugiat neque, in vestibulum
					leo arcu vitae justo. Duis magna mi, maximus at neque sed, tempor
					congue ligula. In iaculis metus nec euismod egestas. Donec id
					porttitor nulla. Donec feugiat iaculis lacus, ut elementum dui
					faucibus sed. Sed ut ipsum non tellus dignissim accumsan. Vivamus
					luctus malesuada lacus sed dictum.
					<br />
					<br />
					Sed consectetur nibh mollis, ornare magna et, dictum tellus. Nam
					viverra dui a enim iaculis, sed blandit orci consectetur. Maecenas et
					nisi eleifend velit pretium eleifend sit amet eget nisl. Vestibulum
					eget ipsum semper purus pulvinar iaculis. Sed ut odio eu felis
					porttitor ultrices eu sed odio. Nullam lorem sapien, pellentesque
					convallis libero vel, tempus accumsan nisi. Morbi efficitur ex vitae
					felis luctus cursus. Suspendisse nibh neque, gravida sed elementum
					ullamcorper, gravida in nisi. Donec et luctus metus. Fusce sed est
					dictum, imperdiet nisi eu, suscipit odio. In id enim at tortor
					malesuada vulputate eu eu sem. Mauris blandit faucibus euismod.
					<br />
					<br />
					Curabitur quam tortor, tristique euismod finibus viverra, bibendum sit
					amet nisl. Nulla lobortis pharetra mauris, ac semper urna tempor et.
					Maecenas enim magna, suscipit nec metus id, ornare pulvinar dolor.
					Cras rhoncus ante sit amet tempus luctus. Donec in nisl a dolor auctor
					tincidunt. Cras at arcu tortor. Pellentesque ante felis, convallis sit
					amet erat id, consectetur consequat sapien. Aliquam volutpat velit in
					est bibendum, vestibulum commodo leo interdum. Integer sodales ex eu
					tempus faucibus. Vestibulum ultricies erat vel leo accumsan posuere.
					Cras commodo felis vitae lacus suscipit, in tristique lectus
					venenatis. Sed et nibh urna. Praesent vitae eleifend turpis. Fusce sit
					amet pretium lorem, in tempus elit. Etiam at ornare est. Aenean felis
					arcu, fermentum scelerisque nibh at, lacinia sagittis neque.
				</div>
				<DialogFooter>
					<Button className="w-full" size="sm">
						Accept
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
