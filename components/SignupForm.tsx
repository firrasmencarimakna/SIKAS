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
  FieldDescription,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6 max-w-md mx-auto", className)} {...props}>
      <Card>
        <CardHeader className="text-center">

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
          
          <CardTitle className="text-2xl">Daftar </CardTitle>
          <CardDescription className="text-base max-w-sm mx-auto">
            {/* Buat akun untuk mengakses jadwal pelajaran, jadwal piket, dan informasi kelas Anda */}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <FieldGroup className="gap-5">
              {/* Informasi penting */}
              <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  Hanya siswa yang <strong>sudah terdaftar di sekolah</strong> yang dapat membuat akun. 
                  {/* Sistem akan memverifikasi NIS dan nama Anda. */}
                </p>
              </div>

              {/* NIS */}
              <Field>
                <FieldLabel htmlFor="nis">NIS (Nomor Induk Siswa)</FieldLabel>
                <Input
                  id="nis"
                  type="text"
                  placeholder="Contoh: 250001"
                  autoComplete="off"
                  required
                />
              </Field>

              {/* Nama Lengkap */}
              <Field>
                <FieldLabel htmlFor="nama">Nama Lengkap</FieldLabel>
                <Input
                  id="nama"
                  type="text"
                  placeholder="Contoh: Muhammad Aditya"
                  autoComplete="name"
                  required
                />
              </Field>

              {/* Username */}
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input
                  id="username"
                  type="text"
                  placeholder="Contoh: aditya01 atau muhammadadit"
                  autoComplete="username"
                  required
                />
              </Field>

              {/* Password */}
              <Field>
                <FieldLabel htmlFor="password">Kata Sandi Baru</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="new-password"
                  required
                />
                <FieldDescription className="text-xs text-muted-foreground mt-1">
                  Minimal 8 karakter, kombinasi huruf besar, kecil, dan angka
                </FieldDescription>
              </Field>

              {/* Tombol Daftar */}
              <Field>
                <Button type="submit" size="lg" className="w-full">
                  Daftar Akun
                </Button>
              </Field>

              {/* Link ke Login */}
              <Field className="text-center">
                <p className="text-sm text-muted-foreground">
                  Sudah punya akun?{" "}
                  <Button variant="link" className="px-0" asChild>
                    <a href="/login" className="font-medium">
                      Masuk di sini
                    </a>
                  </Button>
                </p>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      {/* Footer */}
      <p className="text-center text-xs text-muted-foreground">
        © 2026 SMK Negeri 1 Pasuruan • Sistem Informasi Sekolah
      </p>
    </div>
  )
}