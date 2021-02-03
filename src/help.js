const help = (prefix) => {
	return `> *Comandos de adesivos* <
comando : *${prefix}sticker* ou *${prefix}stiker*
desc : convert image/gif/video em sticker
usage : resposta image/gif/video, ou enviar image/gif/video with caption\n
comando : *${prefix}sticker nobg* ou *${prefix}stiker nobg*
desc : convert imagem para adesivo while removendo o fundo
usage : resposta image, or send image with caption\n
comando : *${prefix}toimg*
desc : convert sticker em imagem
usage : resposta sticker\n
command : *${prefix}tsticker* or *${prefix}tstiker*
desc : convert texto em adesivo
usage : *${prefix}tsticker text in here*\n

> *Outros Comandos* <
comando : *${prefix}gtts*
desc : convert texto para fala/áudio
usage : *${prefix}gtts [pt] [texto]*\nexemplo : *${prefix}gtts pt On2-chan*\n
comando : *${prefix}loli*
desc : imagens aleatórias de loli
usage : apenas envie o comando\n
command : *${prefix}nsfwloli*
desc : imagens aleatórias de nsfw loli
comando : *${prefix}setprefix*
desc : substituir prefixo
usage : *${prefix}setprefix [texto|opcional]*\nexemplo : *${prefix}setprefix ?*
note : Este comando só pode ser usado pelo proprietário do bot\n
> *Comandos de Grupo* <
comando : *${prefix}add*
desc : adicionar membro ao grupo
usage : *${prefix}add 62813xxxxx*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
}

exports.help = help
