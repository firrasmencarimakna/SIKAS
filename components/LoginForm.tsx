import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Image from "next/image"


export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6 max-w-md mx-auto", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          {/* Opsional: tambah icon sekolah di atas */}
          <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Image
              src="/smkn1.png"
              alt="Logo SMKN 1 Contoh"
              width={160}
              height={160}
              className="object-contain"
              priority
            />
          </div>
          
          <CardTitle className="text-2xl">Selamat Datang Kembali!</CardTitle>
          <CardDescription className="text-base">
            {/* Masuk ke sistem informasi sekolah menggunakan akun Anda */}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <FieldGroup className="gap-5">
              {/* Username */}
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input
                  id="username"
                  type="text"
                  placeholder="Masukkan username atau NIS"
                  autoComplete="username"
                  required
                />
                <p className="text-sm text-muted-foreground mt-1.5">
                  Gunakan username yang Anda daftarkan atau NIS Anda
                </p>
              </Field>

              {/* Password */}
              <Field>
                <div className="flex items-center justify-between">
                  <FieldLabel htmlFor="password">Kata Sandi</FieldLabel>
                  <a
                    href="/lupa-password"
                    className="text-sm underline-offset-4 hover:underline text-primary"
                  >
                    Lupa kata sandi?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                />
              </Field>

              {/* Tombol Login */}
              <Field>
                <Button type="submit" size="lg" className="w-full">
                  Masuk
                </Button>
              </Field>

              {/* Separator & Link Register */}
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Belum punya akun?
              </FieldSeparator>

              <Field className="text-center">
                <p className="text-sm text-muted-foreground">
                  Siswa baru dapat mendaftar menggunakan NIS dan data pribadi.
                </p>
                <Button variant="link" className="px-0 mt-2" asChild>
                  <a href="/signup" className="text-base font-medium">
                    Daftar Akun 
                  </a>
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      {/* Footer kecil */}
      <p className="text-center text-xs text-muted-foreground">
        © 2026 SMK Negeri 1 Pasuruan. Sistem Informasi Sekolah.
      </p>
    </div>
  )
}